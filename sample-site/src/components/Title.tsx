interface Props {
  text: string;
}

const Title = ({text}: Props) => {
  return <h1 className="text-center">{text}</h1>;
};

export default Title;
