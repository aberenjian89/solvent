class AddCompanyTable < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name 
      t.text :description
      t.string :subdomain 
      t.string :domain 
      t.integer :number_user
      t.integer  :account_owner_id
      t.timestamps
    end
  end
end
