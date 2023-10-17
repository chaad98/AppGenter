class AddLanguageToEnquiries < ActiveRecord::Migration[7.0]
  def change
    add_column :enquiries, :language, :string
  end
end
