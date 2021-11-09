Rails.application.routes.draw do
  resources :posts
  resources :users, only: [:index]

  get '/me', to: "auth#me"
  post '/login', to: "auth#login"
  post '/signup', to: "auth#signup"
  delete '/logout', to: "auth#logout"
    
  get "/hello", to: "application#hello_world"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
