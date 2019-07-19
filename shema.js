const schema = {
    create: {
        method: 'POST',
        params: {
            internal_app_id: 1,
            name: 1,
            market_name: 1,
            image_generic: 1,
            amount: 1,
            color: 1,
            rarity_name: 0,
            collection_name: 0,
            external_id: 0,
            instant_sell_enabled: 0,
            instant_sell_value: 0,
            json_attributes: 0,
        }
    },
    search: {
        method: 'GET',
        params: {
            q: 0,
        }
    },
    read: {
        method: 'GET',
        params: {
            submission_id: 0,
        }
    },
    refill: {
        method: 'POST',
        params: {
            submission_id: 1,
            number_of_items_to_refill: 1,
        }
    },
    uploadImage: {
        method: 'POST',
    }
};

module.exports = schema;