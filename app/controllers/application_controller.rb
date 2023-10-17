class ApplicationController < ActionController::Base
    include Internationalization

    add_flash_types :primary, :secondary, :light, :dark, :danger, :info, :warning, :success
end
