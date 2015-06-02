class WelcomeController < ApplicationController
  def index
  	@homeland = 'Italy'
  	@countries = ['Japan', 'Poland', 'Thailand']
  	@travel_pics = ['japan2.gif', 'poland1.jpg', 'thailand1.jpg']
  end

def about
   @color = params[:color]
   @size = params[:size].to_i
 end

def contact
end
 
end
