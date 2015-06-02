class City < ActiveRecord::Base
	belongs_to :countries
	validates :message, presence: true
end
