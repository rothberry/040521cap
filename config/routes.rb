Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :relationships, only: [:index, :create, :destroy]
      resources :comments
      resources :posts
      resources :users, only: [:index]
      
      get '/me', to: "auth#me"
      post '/login', to: "auth#login"
      post '/signup', to: "auth#signup"
      delete '/logout', to: "auth#logout"

    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
