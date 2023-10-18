class RedirectController < ApplicationController
    def redirect_to_external
        redirect_to "https://www.api-controller.com/demo", allow_other_host: true
    end
end
