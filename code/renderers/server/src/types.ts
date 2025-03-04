import type { StoryContext as StoryContextBase } from '@storybook/csf';

export type { RenderContext } from '@storybook/core-client';

export type StoryFnServerReturnType = any;
export type StoryContext = StoryContextBase<ServerFramework>;

export type ServerFramework = {
  component: string;
  storyResult: StoryFnServerReturnType;
};

export type FetchStoryHtmlType = (
  url: string,
  id: string,
  params: any,
  context: StoryContext
) => Promise<string | Node>;

export interface ShowErrorArgs {
  title: string;
  description: string;
}
