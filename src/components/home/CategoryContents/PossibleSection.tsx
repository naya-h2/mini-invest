import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { PROXY } from "../../../constants/api";
import CardList from "../../list/CardList";
import ContentLayout from "../ContentLayout";

interface Props {
  isPossible?: boolean;
}

function PossibleSection({ isPossible = true }: Props) {
  const { category } = useStore((state) => ({ category: state.category }));
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["item", category, isPossible],
    queryFn: async () => {
      const res = await axios.get(isPossible ? `${PROXY}/api/category?category=${category}` : `${PROXY}/api/end`);
      if (res.data.length > 4) return res.data.slice(0, 4);
      return res.data;
    },
  });

  return (
    <ContentLayout
      title={isPossible ? "지금 투자 가능 목록" : "최근 종료된 투자 목록"}
      handleMoreClick={() => navigate(isPossible ? `/list?category=${category}` : "/list?end=true")}
    >
      {isLoading ? "로딩중.." : data && data.length !== 0 ? <CardList data={data} isEnd={!isPossible} /> : "데이터가 없습니다."}
    </ContentLayout>
  );
}

export default PossibleSection;
