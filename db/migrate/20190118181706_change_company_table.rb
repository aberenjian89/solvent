class ChangeCompanyTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :companies, :description
    remove_column :companies, :number_user
  end
end
