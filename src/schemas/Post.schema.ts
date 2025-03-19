import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './User.schema';

@Schema()
export class Post {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop({ unique: true, required: false })
  contents: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
