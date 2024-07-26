interface Props {
  text: string;
}

const Title = ({text}: Props) => {
  return <h1 className="text-center display-3 mb-5">{text}</h1>;
};

export default Title;
