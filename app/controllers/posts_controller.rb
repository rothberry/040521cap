class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts
  end
  
  def create

  end
  
  
end
