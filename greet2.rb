require 'csv'

def greet(name)
 file = CSV.read("greetings.csv")
  greetings = file(0)
  num = rand(greetings.length)

  "#{greetings[num]} #{name}!"

 

end

name = gets.chomp

puts greet(name)
