Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root "pages#landing_page"

    get "products", to: "pages#products"

    # get "projects", to: "pages#projects"
    get "contact", to: "pages#contact_us"

    resources :enquiries
  end

end
