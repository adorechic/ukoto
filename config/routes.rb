Rails.application.routes.draw do
  root to: 'task_sets#index'
  resources :task_sets, only: %i(index)
end
