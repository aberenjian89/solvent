class AddColumnToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_id, :integer, null: false, default: 0
    add_column :users, :title, :string, null: false , default: ''
    add_column :users, :first_name, :string, null: false, default: '' 
    add_column :users, :last_name, :string, null: false, default: '' 
    add_column :users, :phone, :string, null: false, default: '' 
  end
end
