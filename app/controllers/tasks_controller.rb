class TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    @task.save!

    redirect_to task_set_path(@task.task_set)
  end

  private

  def task_params
    params.require(:task).permit(:title, :task_set_id)
  end
end
