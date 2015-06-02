class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :band
      t.text :title
      t.date :year
      t.boolean :bought

      t.timestamps null: false
    end
  end
end
