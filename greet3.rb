require 'csv'

names = ARGV

def greet(name)
 file = CSV.read("greetings.csv")
  greetings = file[0]
  num = rand(greetings.length)

  "#{greetings[num]} #{name}!"

 

end

names.each do |name|
puts greet(name)
end