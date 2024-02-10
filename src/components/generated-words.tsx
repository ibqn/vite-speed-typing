type Props = {
  words: string
}

export const GeneratedWords = ({ words }: Props) => {
  return <div className="text-slate-500">{words}</div>
}
