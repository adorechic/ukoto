class Task < ApplicationRecord
  belongs_to :task_set

  enum status: { wip: 0, completed: 1 }
end
