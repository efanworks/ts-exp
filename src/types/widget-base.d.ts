interface Widget {
  id: number;
}

declare function getWidget(id: number): Widget;
declare function getWidget(content: string): Widget[];
