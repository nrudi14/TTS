class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :classroom
      t.string :subject

      t.timestamps null: false
    end
  end
end
