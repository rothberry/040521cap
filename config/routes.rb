Rails.application.routes.draw do
  resources :posts, only: [:index, :show, :create]
  resources :users, only: [:index]
  
  get '/me', to: "auth#me"
  post '/login', to: "auth#login"
  post '/signup', to: "users#create"
  delete '/logout', to: "auth#logout"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
