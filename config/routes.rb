Rails.application.routes.draw do
  root to: 'task_sets#index'
  resources :task_sets, only: %i(index new create show destroy)
  resources :tasks, only: %i(create)
end
