class Leaderboard
    attr_reader :players

    # Initializing function
    def initialize()
        @players = Hash.new { |h, k| h[k] = [] } #Hashmap for keeping track of scores
        @scores = Hash.new { |h, k| h[k] = [] } #Hashmap for keeping track of average scores
    end

    #Function for adding new entries of players and scores
    def add_score(player, score)
        @players[player].push(score) 
        average_score(player)
    end

    #Helper Function for finding average score for a player
    def average_score(player)
        scores = @players[player]
        scores = @players[player]
        average = (scores.reduce(:+)*1.0)/scores.length * 1.0 #Multiplying by 1.0 to make sure the computed result is Float
        @scores[player] = average
        average
    end

    #Function for finding top "count" players of the scoreboard
    def top(count)
        result = []
        avg_scores = []
        avg_scores = @scores.values.sort
        tops = avg_scores.drop(avg_scores.length - count)
        tops.each do |score|
            result.unshift(@scores.key(score))
        end
        result
    end

    #Function to reset the score of a player
    def reset(player)
        @players[player] = []
        @scores[player] = 0
        nil
    end
end

# Testing using inputs

lb = Leaderboard.new
p lb.add_score(1, 50)
p lb.add_score(2, 80)
p lb.add_score(2, 70)
p lb.add_score(2, 60)
p lb.add_score(3, 90)
p lb.add_score(3, 85)
p lb.top(3)
p lb.top(2)
p lb.top(1)
p lb.reset(3)
p lb.top(3)
