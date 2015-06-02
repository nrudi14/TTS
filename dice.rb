def roll(dice_array)
    dice_roll = []
    dice_array = dice_array.shuffle
    dice_roll = dice_array.first(2)
end

dice = [1,2,3,4,5,6]

# roll  dice
my_roll = roll(dice)
puts "Your roll is: " + my_roll.inspect


friend_roll = roll(dice)
puts "Your friend's roll is: " + friend_roll.inspect


