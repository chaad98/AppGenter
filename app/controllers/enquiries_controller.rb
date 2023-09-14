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

        unless @enquiry.name.present?
            @enquiry.errors.add(:name, I18n.t("activerecord.errors.models.enquiry.attributes.name.blank"))
        end

        unless @enquiry.email.present?
            @enquiry.errors.add(:email, I18n.t("activerecord.errors.models.enquiry.attributes.email.blank"))
        end

        unless @enquiry.phone_number.present?
            @enquiry.errors.add(:phone_number, I18n.t("activerecord.errors.models.enquiry.attributes.phone_number.blank"))
        end

        unless @enquiry.message.present?
            @enquiry.errors.add(:message, I18n.t("activerecord.errors.models.enquiry.attributes.message.blank"))
        end

        if @enquiry.valid?
            if @enquiry.save
                redirect_to root_path, success: "Forms has been submitted successfully!"
            else
                render :new
            end
        else
            redirect_to root_path, danger: "Please key in all of the details!"
        end
    end

    def edit
    end

    def update
        if @enquiry.update(enquiry_params)
            redirect_to root_path, success: "Forms updated successfully!"
        else
            render :edit
        end
    end

    private

    def enquiry_params
        params.require(:enquiry).permit(:name, :email, :phone_number, :message)
    end

end
