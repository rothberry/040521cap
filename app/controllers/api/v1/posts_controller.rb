class Api::V1::PostsController < ApplicationController
  User = Api::V1::User
  Post = Api::V1::Post
  
  def index
    posts = Post.all
    render json: posts
  end

  def create
    new_post = Post.new(post_params)
    if new_post.save
      render json: new_post
    else
      render json: {error: new_post.errors.full_messages} status: :not_created
    end
  end

  private

  def post_params
    parmas.permit(:content, :user_id)
  end
  
end
