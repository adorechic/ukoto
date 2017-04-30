class TaskSetsController < ApplicationController
  def index
    @task_sets = TaskSet.all
  end

  def new
  end

  def create
    @task_set = TaskSet.new(task_set_params)
    @task_set.save!

    redirect_to task_set_path(@task_set)
  end

  def show
    @task_set = TaskSet.find(params[:id])
  end

  def destroy
    @task_set = TaskSet.find(params[:id])
    @task_set.destroy!

    redirect_to task_sets_path
  end

  private

  def task_set_params
    params.require(:task_set).permit(:title)
  end
end
