import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post('create')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
}
