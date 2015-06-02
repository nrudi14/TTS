class Country < ActiveRecord::Base
	has_many :cities
	validates :username, presence: true, uniqueness: true
end
