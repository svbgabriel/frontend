export interface IFile {
  _id: string;
  title: string;
  path: string;
  url: string;
  createdAt: string;
}

export interface IBox {
  title: string;
  files: Array<IFile>;
}

export interface IBoxProps {
  match: {
    params: {
      id: string;
    };
  };
}

export interface IBoxState {
  box: IBox;
}
