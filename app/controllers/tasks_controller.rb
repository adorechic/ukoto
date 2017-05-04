class TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    @task.save!

    respond_to do |format|
      format.html {
        redirect_to task_set_path(@task.task_set)
      }
      format.json {
        head 204
      }
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :task_set_id)
  end
end
