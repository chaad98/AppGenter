class EnquiriesController < ApplicationController
    def index
        @enquiries = Enquiry.all
    end

    def show
    end

    def new
        @enquiry = Enquiry.new
    end

    def create
        @enquiry = Enquiry.new(enquiry_params)
        @enquiry.language = I18n.locale.to_s
        
        if @enquiry.save
            # Save the data to the JSON file after a new record is created
            save_to_json

            # Build the JSON data you want to send to the external API
            json_data = @enquiry.attributes.merge(language: I18n.locale.to_s).to_json

            # Build the JSON data you want to send to the external API
            api_url = 'https://www.api-controller.com/api/appgenter_contact_form_mail.php?json='
            api_url_with_query = "#{api_url}#{URI.encode_www_form_component(json_data)}"

            # Send the JSON data to the external API using HTTParty
            response = HTTParty.post(api_url_with_query, body: json_data, headers: { 'Content-Type' => 'application/json' })

            if response.success?
                redirect_to root_path, success: t('pages.flash.success')
                Rails.logger.info("API Response: #{response.code} - #{response.body}")
            else
                Rails.logger.error("API Error: #{response.code} - #{response.body}")
                flash.now[:danger] = t('pages.flash.danger_api')
            end
        else
            redirect_to root_path, danger: t('pages.flash.danger')
        end
    end

    def edit
    end

    def update
        if @enquiry.update(enquiry_params)
            # Save the data to the JSON file after an existing record is updated
            save_to_json
            redirect_to root_path, success: "JSON data updated successfully!"
        else
            redirect_to root_path, danger: "JSON data is failed!"
        end
    end

    # Action to serve the JSON data
    def json_data
        json_data = File.read(json_file_path)
        render json: json_data, content_type: 'application/json'
    end

    private

    def enquiry_params
        params.require(:enquiry).permit(:name, :email, :phone_number, :message)
    end

    # Save form data to a JSON file
    def save_to_json
        # Retrieve all the records from your database
        enquiries = Enquiry.all
    
        # Convert the records to an array of hashes with the "language" attribute
        data = enquiries.map { |enquiry| enquiry.attributes }
    
        # Write the data to the JSON file, overwriting its contents
        File.write(json_file_path, JSON.pretty_generate(data))
    end

    def json_file_path
        File.join(Rails.public_path, 'data', 'form_data.json')
    end

end
