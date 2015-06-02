class WelcomeController < ApplicationController

  def index
  	@homeland = 'Italy'
  	@countries = ['Japan','Thailand','Poland','Brazil']
  	@travel_pics = ['japan2.gif','brazil1.jpg', 'poland1.jpg', 'thailand1.jpg' ]
  end

  def about
  	@color = params[:color]
  	@size = params[:size].to_i
  end

def contact
end
end
