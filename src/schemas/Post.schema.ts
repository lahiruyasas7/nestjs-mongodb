import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Post {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop({ unique: true, required: false })
  contents: string;

  @Prop({ unique: true, required: true })
  users: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);