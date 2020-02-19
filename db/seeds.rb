# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

categories = ['chinese', 'italian', 'japanese', 'french', 'belgian']

20.times do
  new_restaurant = Restaurant.new(name: Faker::Restaurant.name)
  new_restaurant.category = categories.sample
  new_restaurant.address = Faker::Address.full_address
  if rand > 0.5
    new_restaurant.phone_number = Faker::PhoneNumber.phone_number_with_country_code
  end
  new_restaurant.save
end
