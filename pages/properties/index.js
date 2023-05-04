import { Box, SimpleGrid } from '@chakra-ui/react';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import PropertyCard from '@/features/common/modules/PropertyCard';
import { getProperties } from '@/features/common/Api/getProperties';

const Properties = ({ properties }) => {
    return (
        <DefaultLayout>
            <Box
                bgColor="#f7f8f9"
                padding="3rem"
            >
                <Box maxWidth="1280px" margin="0 auto">
                    <SimpleGrid
                        columns={{ base: "1", sm: "3" }}
                        gap={{ base: "0", sm: "2rem" }}
                    >
                        {properties.map((property) => (
                            <PropertyCard key={property.id} {...property} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </DefaultLayout>
    );
};
export default Properties;

export async function getStaticProps() {
    const properties = await getProperties(15);
    return {
        props: { properties: properties }
    }
}