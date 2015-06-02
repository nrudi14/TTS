def greet(name)
 num = rand(2)
 greetings = ["Hello", "Guten Tag", "Aloha"]

 "#{greetings[num]} #{name}!"

end

name = gets.chomp

puts greet(name)