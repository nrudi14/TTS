class WelcomeController < ApplicationController
  def index
  	@homeland = 'Italy'
  	@countries = ['Japan','Brazil','Poland','Thailand']
  	@travel_pics = ['japan2.gif','brazil1.jpg', 'poland1.jpg', 'thailand1.jpg']
  end

  def about
  	def about
   @color = params[:color]
 end
  end
end
