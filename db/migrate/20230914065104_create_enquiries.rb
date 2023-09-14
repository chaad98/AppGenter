class CreateEnquiries < ActiveRecord::Migration[7.0]
  def change
    create_table :enquiries do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.text :message

      t.timestamps
    end
  end
end
