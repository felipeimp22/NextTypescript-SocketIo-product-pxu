import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  PageContainer,
  Title,
  HistoryContainer,
  HistoryItem,
  ItemDetails,
  Pagination,
  PageButton,
} from "@/styles/pages/purchaseHistoryStyles";
import { toast } from "react-toastify";
import { me } from "@/services/me";

interface PurchaseItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  date: string;
}

const PurchaseHistory: React.FC = () => {
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const fetchPurchaseHistory = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to view purchase history.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("/login");
      return;
    }

    try {
      const response = await me();

      const history = response.bought_items;
      const sortedHistory = history.sort(
        (a: PurchaseItem, b: PurchaseItem) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setPurchaseHistory(sortedHistory);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch purchase history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseHistory();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <PageContainer>
      <Title>Purchase History</Title>
      {isLoading ? (
        <p>Loading...</p>
      ) : purchaseHistory.length > 0 ? (
        <HistoryContainer>
          {purchaseHistory.map((item) => (
            <HistoryItem key={item._id}>
              <ItemDetails>
                <h4>{item.title}</h4>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>
                  Total Price: ${Number(item.price.toFixed(2)) * item.quantity}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Date: {new Date(item.date).toLocaleString()}</p>
              </ItemDetails>
            </HistoryItem>
          ))}
        </HistoryContainer>
      ) : (
        <p>No purchase history available.</p>
      )}

      <Pagination>
        <PageButton
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </PageButton>
        <span>
          Page {page} of {totalPages}
        </span>
        <PageButton
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </PageButton>
      </Pagination>
    </PageContainer>
  );
};

export default PurchaseHistory;
