class UserMailer < ApplicationMailer
    def mailer(enquiry)
        @enquiry = enquiry
        mail(from: "faritzchad@yahoo.com", to: enquiry.email, subject: "Enquiry Form - #{enquiry.id}")
    end
end
