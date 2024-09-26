export type Task = {
  title: string;
  id: string;
};

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
