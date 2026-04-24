Rails.application.routes.draw do
  get "states/index"
  resources :states, only: [:index] do
    resources :cities, only: [:index] 
  end
  

  resources :cities, only: [:show] 
end