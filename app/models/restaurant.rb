class Restaurant < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :name, presence: true
  validates :address, presence: true
  validates :category, presence: true,
                       inclusion: { in: ['chinese', 'italian', 'japanese', 'french', 'belgian'] }
  validates :phone_number, allow_blank: true, allow_nil: true, format: { with: /\A[\d|\W|x]+\z/ }
end
