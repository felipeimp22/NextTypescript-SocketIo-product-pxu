import React, { useEffect, useState, useCallback } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import debounce from "lodash.debounce";
import {
  Container,
  FilterContainer,
  FilterInput,
  FilterSelect,
  PageNumber,
  Pagination,
  ProductGrid,
  SkeletonCard,
  SkeletonGrid,
} from "./styles";
import { CTASquareButton } from "@/styles/shared/CTASquareButton";
import { GradientLine } from "@/styles/shared/gradientLine";
import { getProducts } from "@/services/getProducts";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 8;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("");
  const [date, setDate] = useState("newest");
  const [inventory, setInventory] = useState("available");
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async (pageNumber: number, filterValue: string) => {
    setIsLoading(true);
    try {
      const response = await getProducts(
        pageNumber,
        ITEMS_PER_PAGE,
        filterValue,
        date,
        inventory
      );

      setProducts(response.data);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      toast.error("Failed to fetch products", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFilter = useCallback(
    debounce((value: string) => {
      setPage(1);
      fetchProducts(1, value);
    }, 300),
    [date, inventory]
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilter(value);
    debouncedFilter(value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(event.target.value);
    setPage(1);
  };

  const handleInventoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInventory(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    fetchProducts(page, filter);
  }, [page, date, inventory]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Container>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Search products..."
          value={filter}
          onChange={handleFilterChange}
        />

        <FilterSelect value={date} onChange={handleDateChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </FilterSelect>

        <FilterSelect value={inventory} onChange={handleInventoryChange}>
          <option value="available">In Stock</option>
          <option value="soldout">Out of Stock</option>
          <option value="all">All</option>
        </FilterSelect>
      </FilterContainer>
      <GradientLine style={{ marginBottom: "20px" }}></GradientLine>
      {isLoading ? (
        <SkeletonGrid>
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </SkeletonGrid>
      ) : (
        <ProductGrid>
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductGrid>
      )}

      <Pagination>
        <CTASquareButton
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </CTASquareButton>
        <PageNumber>
          Page {page} of {totalPages}
        </PageNumber>
        <CTASquareButton
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </CTASquareButton>
      </Pagination>
    </Container>
  );
};

export default ProductList;
