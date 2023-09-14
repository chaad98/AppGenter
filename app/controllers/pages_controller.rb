class PagesController < ApplicationController
  def landing_page
    @enquiry = Enquiry.new
  end

  def appgenter
  end

  def products
  end

  def projects
  end

  def contact_us
    @enquiry = Enquiry.new
  end
end
