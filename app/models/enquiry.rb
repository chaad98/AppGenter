class Enquiry < ApplicationRecord
    validates_presence_of :name, :email, :phone_number, :message
end
